UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7508",
  "logo": "7508.gif",
  "receiptName": "",
  "sName": "Forex4you",
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
                    "header": "Введите Ваш номер счета в дилинговом центре Forex4you",
                  "footer": "",
                  "mask": "<!^\\d+${2,15}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{2,15}$",
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