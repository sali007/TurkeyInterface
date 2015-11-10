UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "813",
  "logo": "813.gif",
  "receiptName": "",
  "sName": "TeNeT",
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
                  "header": "¬ведите номер лицевого счета",
                  "footer": "",
                  "mask": "<!^\\d+${3,5}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{3,5}$",
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