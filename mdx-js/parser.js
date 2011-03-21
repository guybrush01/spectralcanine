//var debug = 0;

/// function Parse
/// Desc Parses a MDX file and returns a MDX object
function Parse (file) {
	var stream = new BinaryStream(file);
	
	if (true === stream.readExpected("MDLX")) {
		var mdx = new MDX();
		var header;
	
		while ((header = stream.readHeader()) != null) {
			switch (header.token) {
				case "VERS": mdx.versionChunk = new VersionChunk(stream, header.size); break;
				case "MODL": mdx.modelChunk = new ModelChunk(stream, header.size); break;
				case "SEQS": mdx.sequenceChunk = new SequenceChunk(stream, header.size); break;
				case "GLBS": mdx.globalSequenceChunk = new GlobalSequenceChunk(stream, header.size); break;
				case "TEXS": mdx.textureChunk = new TextureChunk(stream, header.size); break;
				case "LAYS": mdx.layerChunk = new LayerChunk(stream, header.size); break;
				case "MTLS": mdx.materialChunk = new MaterialChunk(stream, header.size); break;
				case "TXAN": mdx.textureAnimationChunk = new TextureAnimationChunk(stream, header.size); break;
				case "GEOS": mdx.geosetChunk = new GeosetChunk(stream, header.size); break;
				case "GEOA": mdx.geosetAnimationChunk = new GeosetAnimationChunk(stream, header.size); break;
				case "BONE": mdx.boneChunk = new BoneChunk(stream, header.size); break;
				case "LITE": mdx.lightChunk = new LightChunk(stream, header.size); break;
				case "HELP": mdx.helperChunk = new HelperChunk(stream, header.size); break;
				case "ATCH": mdx.attachmentChunk = new AttachmentChunk(stream, header.size); break;
				case "PIVT": mdx.pivotPointChunk = new PivotPointChunk(stream, header.size); break;
				case "PREM": mdx.particleEmitterChunk = new ParticleEmitterChunk(stream, header.size); break;
				case "PRE2": mdx.particleEmitter2Chunk = new ParticleEmitter2Chunk(stream, header.size); break;
				case "RIBB": mdx.ribbonEmitterChunk = new RibbonEmitterChunk(stream, header.size); break;
				case "EVTS": mdx.eventObjectChunk = new EventObjectChunk(stream, header.size); break;
				case "CAMS": mdx.cameraChunk = new CameraChunk(stream, header.size); break;
				case "CLID": mdx.collisionShapeChunk = new CollisionShapeChunk(stream, header.size); break;
				default: throw "Exception: unknown chunk ID " + header.token
			}
		}
		
		return mdx;
	} else {
		throw "Exception: Oops, " + file + " is not a MDX file";
	}
}