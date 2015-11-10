UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "3727",
  "logo": "3727.gif",
  "receiptName": "",
  "sName": "RED NORD",
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
                  "header": "¬ведите номер квитанции",
                  "footer": "",
                  "mask": "<!^\\d+${1}>/<!^\\d+${1,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{3,14}$",
                  "strip": "False",
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