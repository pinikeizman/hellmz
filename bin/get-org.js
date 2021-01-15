org = "pinikeizman"
orgPrefox = `${org}_`;
collections = db.getCollectionNames().filter(name => name.indexOf("pinikeizman_") === 0)
collections.forEach(name => printCol(name))

// db.users.find({organization: org})
printCol("users", { organization: org })

function printCol(name, filter = {}){
  print(name)
  printCursor(db[name].find(filter));
}
function printCursor (cursor){
  while ( cursor.hasNext()  ) {
    printjson( cursor.next()  );
  }
}
