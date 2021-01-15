cursor = db.users.find();
while ( cursor.hasNext()  ) {
       printjson( cursor.next()  );

}
