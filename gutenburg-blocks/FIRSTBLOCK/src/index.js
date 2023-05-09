import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'adamj/firstblock', {
	edit: function () {
		return <p className="class">Edit JSX</p>;
	},
	save: function () {
		return <p className="class">Save JSX</p>;
	},
} );
