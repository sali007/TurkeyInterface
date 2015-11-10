UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "4469",
  "logo": "4469.gif",
  "receiptName": "",
  "sName": "Русский Стандарт «Банк в кармане»",
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
                  "header": "Введiть Ваш номер рахунку",
                  "footer": "",
                  "mask": "<!^\\d+${10,14}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10,14}$",
                  "strip": "false",
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