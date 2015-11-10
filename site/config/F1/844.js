UIProvider  ={"curId":"974","curNom":"BYR",
  "grpId": "100006",
  "id": "844",
  "logo": "844.gif",
  "receiptName": "",
  "sName": "МТС(Беларусь)",
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
                  "footer": "Внимание! Номер вводится в формате : 375xxxxxxxxx . Пример : 375297447407",
                  "mask": "375<!^\\d+${2}><!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{12}$",
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