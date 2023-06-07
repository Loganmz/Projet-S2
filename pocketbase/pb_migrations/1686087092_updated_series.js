migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ekxepk0jop3kgr9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmcxqqwm",
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
  const collection = dao.findCollectionByNameOrId("ekxepk0jop3kgr9")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmcxqqwm",
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
