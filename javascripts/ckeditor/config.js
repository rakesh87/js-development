/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		// { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		// { name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'styles' },
		// { name: 'colors' },
		// { name: 'tools' },
		// { name: 'others' },
		// { name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript,Blockquote,Removeformat';
	// Set the most common block elements.
	// config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};

CKEDITOR.stylesSet.add( 'default', [
    		// Block Styles
		    { name: 'Blue Title',       element: 'h3',      styles: { 'color': 'Blue' } },
		    { name: 'Red Title',        element: 'h3',      styles: { 'color': 'Red' } },

		    // Inline Styles
		    { name: 'Marker: Yellow',   element: 'span',    styles: { 'background-color': 'Yellow' } },
		    { name: 'Marker: Green',    element: 'span',    styles: { 'background-color': 'Lime' } },

		    // Object Styles
			    {
			        name: 'Image on Left',
			        element: 'img',
			        attributes: {
			            style: 'padding: 5px; margin-right: 5px',
			            border: '2',
			            align: 'left'
			        }
			    }
				] );
