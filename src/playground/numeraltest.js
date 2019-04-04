import numeral from 'numeral';


numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal: function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '₹'
    }
});

// switch between locales
numeral.locale('fr');

// load a format
// numeral.register('format', 'percentage', {
//     regexps: {
//         format: /(%)/,
//         unformat: /(%)/
//     },
//     format: function (value, format, roundingFunction) {
//         var space = numeral._.includes(format, ' %') ? ' ' : '',
//             output;

//         value = value * 100;

//         // check for space before %
//         format = format.replace(/\s?\%/, '');

//         output = numeral._.numberToFormat(value, format, roundingFunction);

//         if (numeral._.includes(output, ')')) {
//             output = output.split('');

//             output.splice(-1, 0, space + '%');

//             output = output.join('');
//         } else {
//             output = output + space + '%';
//         }

//         return output;
//     },
//     unformat: function (string) {
//         return numeral._.stringToNumber(string) * 0.01;
//     }
// });

// use your custom format
// console.log(numeral(1255.5).format('0%'));
console.log(numeral(1255522.5).format('$0,0.00'))