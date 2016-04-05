import test from 'ava';
import execa from 'execa';

test('error if lambda function name is not provided', async t => {
	t.throws(execa('./cli.js'), /provide a lambda function name/);
});

test('error if alias is not provided', async t => {
	t.throws(execa('./cli.js', ['foo']), /provide an alias/);
});
