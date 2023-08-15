import { inline as i } from "./inline.js"
// pra renomear precisa fazer esse "as ...", mas não é mt comum usar pq existe:

import d from "./inline.js" // (exportDefault) só pode ter um por arquivo

import { group } from "./non-inline.js"

import exportDefault from "./non-inline.js"

// import exportDefault, { group } from "./non-inline.js"
// da pra fazer td junto

i()
d()

group()
exportDefault()