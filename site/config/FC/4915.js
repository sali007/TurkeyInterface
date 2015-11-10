UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "4915",
  "logo": "4915.gif",
  "receiptName": "",
  "sName": "Жамбыл-Жарык-Сауда",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Введите номер счета",
                  "footer": "",
                  "mask": "<!^\\d+${5,6}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{5,6}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DG",
                  "type": "keyboard"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}