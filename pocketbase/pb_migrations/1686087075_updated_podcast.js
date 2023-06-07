migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e8lwb1nt8qwjhec")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "selqnufy",
    "name": "attach",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e8lwb1nt8qwjhec")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "selqnufy",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
