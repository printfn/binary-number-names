function pow2(n) {
	let res = 2n;
	while (res ** 2n <= n) {
		res = res ** 2n;
	}
	return res;
}

function str(n) {
	if (typeof n === 'number') {
		return str(BigInt(n));
	}
	switch (n) {
		case 0n: return 'zero';
		case 1n: return 'one';
		case 2n: return 'two';
		case 3n: return 'three';
		case 4n: return 'four';
		case 5n: return 'five';
		case 6n: return 'six';
		case 7n: return 'seven';
		case 8n: return 'eight';
		case 9n: return 'nine';
		case 10n: return 'ten';
		case 11n: return 'eleven';
		case 12n: return 'twelve';
		case 16n: return 'hex';
		case 64n: return 'stack';
		case 256n: return 'byte';
		case 0x10000n: return 'short';
		case 0x100000000n: return 'int';
		case 0x10000000000000000n: return 'long';
		case 0x100000000000000000000000000000000n: return 'overlong';
		case 0x10000000000000000000000000000000000000000000000000000000000000000n: return 'byteplex';
	}
	const size = pow2(n);
	const left = n / size;
	let left_size = `${str(left)} ${str(size)}`;
	if (left === 1n) {
		left_size = str(size);
	} else if (size * left === 12n) {
		left_size = str(12n);
	} else if (size * left === 64n) {
		left_size = str(64n);
	}
	if (n % size === 0n) {
		return left_size;
	}
	const right = n % size;
	return `${left_size} ${str(right)}`;
}

for (let i = 0n; ; ++i) {
	console.log(i.toString(), str(i));
}
