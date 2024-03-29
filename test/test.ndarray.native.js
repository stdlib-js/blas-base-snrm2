/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array-float32' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var snrm2 = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( snrm2 instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof snrm2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( snrm2.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the L2-norm of a vector', opts, function test( t ) {
	var x;
	var z;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	z = snrm2( x.length, x, 1, 0 );
	t.strictEqual( z, 7.41619873046875, 'returns expected value' );

	x = new Float32Array( [ -4.0 ] );

	z = snrm2( x.length, x, 1, 0 );
	t.strictEqual( z, 4.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0`', opts, function test( t ) {
	var x;
	var z;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	z = snrm2( 0, x, 1, 0 );
	t.strictEqual( z, 0.0, 'returns expected value' );

	z = snrm2( -1, x, 1, 0 );
	t.strictEqual( z, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var N;
	var x;
	var z;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);

	N = 4;
	z = snrm2( N, x, 2, 0 );

	t.strictEqual( z, 5.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', opts, function test( t ) {
	var N;
	var x;
	var z;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);

	N = 4;
	z = snrm2( N, x, -2, x.length-2 );

	t.strictEqual( z, 5.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `offset` parameter', opts, function test( t ) {
	var N;
	var x;
	var z;

	x = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	N = 4;

	z = snrm2( N, x, 2, 1 );
	t.strictEqual( z, 5.0, 'returns expected value' );

	t.end();
});
