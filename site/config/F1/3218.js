UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "3218",
  "logo": "3218.gif",
  "receiptName": "",
  "sName": "Услуги МВД",
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
                  "header": "Введите номер услуги или фискальный код",
                  "footer": "",
                  "mask": "<!^\\d+${1,30}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,30}$",
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