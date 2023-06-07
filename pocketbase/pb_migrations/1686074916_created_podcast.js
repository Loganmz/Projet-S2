migrate((db) => {
  const collection = new Collection({
    "id": "e8lwb1nt8qwjhec",
    "created": "2023-06-06 18:08:36.526Z",
    "updated": "2023-06-06 18:08:36.526Z",
    "name": "podcast",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "evvyhwci",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ajjl7ijn",
        "name": "synopsis",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e8lwb1nt8qwjhec");

  return dao.deleteCollection(collection);
})
