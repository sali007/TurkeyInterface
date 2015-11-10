UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "400066",
  "logo": "400066.gif",
  "receiptName": "",
  "sName": "Молдтелеком",
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
                  "header": "Введите Ваш номер",
                  "footer": "Внимание! Номер  вводится в формате : 373xxxxxxxx . Пример: 37312345678",
                  "mask": "<!^.*${11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^.{11}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "AL",
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