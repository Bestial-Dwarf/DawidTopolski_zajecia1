var Vectors =
{
    sum: function (a, b)
    {
        if (a.length != b.length) 
	return false;

        let array = [];

        for (let i = 0; i < a.length; i++){

            array[i] = a[i] + b[i];
        }
        
	return array;
    },

    mulByScalar: function (a, b)

    {
        if (typeof (b) != "number") 
	return false;

        let array = [];

        for (let i = 0; i < a.length; i++) {

            array[i] = a[i] * b;
        }

        return array;
    }




}