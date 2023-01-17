const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head("a"),"b");
assertEqual(head(""),"b");
assertEqual(head("eeeqwe"),"e");
assertEqual(head("qqqdwdwef"),"b");
