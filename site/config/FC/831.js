UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "831",
  "logo": "831.gif",
  "receiptName": "",
  "sName": "Moldtelecom",
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
                  "header": "Введите код района, номер телефона",
                  "footer": "",
                  "mask": "<!^\\d+${6,9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{6,9}$",
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