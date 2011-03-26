require 'nokogiri'
require "net/http"
require "uri"
require "cgi"

=begin
class Torrent
	attr_reader :url, :name, :date, :size
	
	def initialize (url, name, date, size)
		@url = url
		@name = name
		@date = date
		@size = size
	end
end

class TPB
	def torrentList (targets)
		list = []
		
		targets.each { |target|
			url = "http://thepiratebay.org/browse/#{target[0]}/0/#{target[1]}"
			p "Getting #{url}"
			pageData = Net::HTTP.get(URI.parse(url)).gsub("&nbsp;", " ")
			p "Creating HTML tree"
			doc = Nokogiri::HTML(pageData)
			p "Finding result table"
			doc.css("table[id = searchResult] > tr").each { |node|
				tokens = node.css("td")
				
				if tokens.size() > 1
					
					torrentPage = "http://thepiratebay.org" + tokens[1].css("a").entries[0].entries[0][1]
					torrentData = Net::HTTP.get(URI.parse(url)).gsub("&nbsp;", " ")
					
					torrentDoc = Nokogiri::HTML(torrentData)
					
					torrentTokens = torrentDoc.css("div[id = datails] > dl.col1")
					p torrentTokens.size

					torrent_name = tokens[1].css("a").entries[0].text()
					torrent_url =  tokens[1].css("a").entries[1].entries[0][1]
					
					text = tokens[1].css("font").entries[0].text()
					match = /Uploaded (\d\d-\d\d \d\d:?\d\d), Size ([\d.]+ [a-zA-Z]+), ULed by .*/.match(text)
				
					torrent_date = match[1]
					torrent_size = match[2]
					
					list[list.size()] = Torrent.new(torrent_url, torrent_name, torrent_date, torrent_size)

				end
			}
		}
		
		return list
	end
end

def downloadList (list)
	list.each { |torrent|
		tokens = torrent.url.split("/")
		name = tokens[tokens.size()-1]
		
		words = name.downcase.split(/[ _.\-\(\)\[\]]+/)
		words = words[0...words.size()-3]
		p words
		#File.open(name, "wb") { |file|
		#	file.write(Net::HTTP.get(URI.parse(torrent.url)))
		#}
		#
		#system("start #{name}")
	}
end

list = TPB.new().torrentList([[201, 7]])
downloadList(list)
=end

class TPBTorrent
	attr_reader :url, :title, :type, :download, :size, :imdb, :uploaded, :seeders, :leechers, :name, :date, :rating, :torrent
	
	def initialize (url)
		@url = ""
		@title = ""
		@type = ""
		@download = ""
		@size = ""
		@imdb = ""
		@uploaded = ""
		@seeders = ""
		@leechers = ""
		@name = ""
		@date = ""
		@rating = ""
		@torrent = ""
		
		
		
		@url = url

		print "Fetching #{@url}..."
		#pageData = connection.get(URI.parse(@url).path).body.gsub("&nbsp;", " ")
		pageData = Net::HTTP.get(URI.parse(@url)).gsub("&nbsp;", " ")
		doc = Nokogiri::HTML(pageData)

		tokens = doc.css("div[id = content] > div[id = main-content] > div > div[id = detailsouterframe] > div[id = detailsframe]")
		@title = tokens.css("div[id = title]").text.gsub(/[\t\n]/, "")
		@type = /(DVDRip|DVDSCR|R5|HDTVRip|TS|CAM|PPVRIP|SCR|)/.match(@title)[0]

		info = tokens.css("div[id = details] > dl")
		@download = tokens.css("div.download").css("a")[0].attributes["href"].value

		dts = info[0].css("dt")
		dds = info[0].css("dd")

		(0...dts.size()).each { |i|
			dt = dts[i]
			dd = dds[i]
			
			case dt.text
				when "Size:" then @size = dd.text
				when "Info:" then @imdb = dd.css("a")[0].attributes["href"].value
				when "Uploaded:" then @uploaded = dd.text
				when "Seeders:" then @seeders = dd.text
				when "Leechers:" then @leechers = dd.text
				else "Skipped #{dt.text}"
			end
		}

		print "Fetching #{@imdb}..."
		pageData = Net::HTTP.get(URI.parse(@imdb)).gsub("&nbsp;", " ")
		doc = Nokogiri::HTML(pageData)

		tokens = doc.css("h1.header")
		match = /\n([a-zA-Z0-9:&#' ]+)\n\n\n\n\(([0-9]+)\)\n\n\n/.match(tokens[0].text)
		@name = CGI.unescapeHTML(match[1])
		@date = match[2]
		@rating = doc.css("div.star-box > div > div[class = 'rating rating-big'] > span.rating-rating").text

		files = Dir.glob("*.torrent.txt")
		files.each { |file|
			lines = IO.readlines(file)

			if lines[2].strip() == @name
				puts "you already have \"#{@name}\", skipping"
				return				
			end
		}

		@torrent = @title.gsub(" ", "_") + ".torrent"
		File.open(@torrent, "wb") { |file|
			file.write(Net::HTTP.get(URI.parse(@download)))
		}

		File.open(@torrent + ".txt", "w") { |file|
			file.puts(@url)
			file.puts(@title)
			file.puts(@name)
			file.puts(@date)
			file.puts(@type)
			file.puts(@size)
			file.puts(@seeders)
			file.puts(@leechers)
			file.puts(@uploaded)
			file.puts(@download)
			file.puts(@imdb)
			file.puts(@rating)
			file.puts(@torrent)
		}
		
		puts "OK"
	end
	
	def download ()
		if @torrent != ""
			system("start #{@torrent}")
			#sleep(0.5)
			#File.delete(@torrent)
		end
	end
	
	def to_s ()
		s = "#{self}:\n"
		s += "\tTorrent url: #{@url}\n"
		s += "\tTitle: #{@title}\n"
		s += "\tName: #{@name}\n"
		s += "\tRelease date: #{@date}\n"
		s += "\tTorrent type: #{@type}\n"
		s += "\tTorrent size: #{@size}\n"
		s += "\tSeeders: #{@seeders}\n"
		s += "\tLeechers: #{@leechers}\n"
		s += "\tUpload date: #{@uploaded}\n"
		s += "\tDownload url: #{@download}\n"
		s += "\tIMDB url: #{@imdb}\n"
		s += "\tIMDB rating: #{@rating}\n"
		s += "\tTorrent file: #{@torrent}\n"
		
		return s
	end
end

#torrent = TPBTorrent.new("http://thepiratebay.org/torrent/6189762/The_Next_Three_Days_%282010%29_DVDRip_XviD-MAX")
#puts torrent

print "Fetching http://thepiratebay.org/browse/201/0/7..."
url = "http://thepiratebay.org/browse/201/0/7"
pageData = Net::HTTP.get(URI.parse(url)).gsub("&nbsp;", " ")
puts "OK"
doc = Nokogiri::HTML(pageData)

doc.css("table[id = searchResult] > tr > td > div.detName > a").each { |link|
	begin
		url = "http://thepiratebay.org" + link.attributes["href"].value
		TPBTorrent.new(url)#.download()
	rescue Exception => e
		puts e
	end
}

=begin
url = URI.parse("http://thepiratebay.org")
Net::HTTP.start(url.host, url.port) { |http|
	print "Fetching http://thepiratebay.org/browse/201/0/7..."
	pageData = http.get("/browse/201/0/7").body.gsub("&nbsp;", " ")
	puts "OK"
	doc = Nokogiri::HTML(pageData)
	
	doc.css("table[id = searchResult] > tr > td > div.detName > a").each { |link|
		url = "http://thepiratebay.org" + link.attributes["href"].value
		TPBTorrent.new(http, url).download()
	}
}
=end
