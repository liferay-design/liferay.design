exports.modifyWebpackConfig = ({ config, stage }) => {
	if (stage === 'build-html') {
		config.loader('null', {
			test: /src/,
			loader: 'null-loader',
		})
	}
}
