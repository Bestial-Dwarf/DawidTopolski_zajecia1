function objectsDiff(a, b)
{
    let p = [];

    for (let pa in a){

        if (!(pa in b))
            p.push(pa);
	}

    for (let pb in b){

        if (!(pb in a) && !(pb in p))
            p.push(pb);
	}

    return p;
}