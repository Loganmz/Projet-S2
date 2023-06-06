migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rglkfkjb",
    "name": "trailer",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rg16qnyijb8vmva")

  // remove
  collection.schema.removeField("rglkfkjb")

  return dao.saveCollection(collection)
})
