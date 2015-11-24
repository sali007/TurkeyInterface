
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100005",
  "id": "481",
  "logo": "481.gif",
  "receiptName": "",
  "sName": "Транстелеком Казахстан",
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
                  "header": "Ваш номер договора",
                  "footer": "Пример: 6890000019",
                  "mask": "<!^\\d+${9,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9,10}$",
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
};