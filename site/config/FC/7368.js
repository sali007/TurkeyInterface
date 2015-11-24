UIProvider  ={"curId":"980","curNom":"UAH",
"round_math":"~1",
  "grpId": "100002",
  "id": "7368",
  "logo": "301.gif",
  "receiptName": "",
  "sName": "Life:)",
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
                  "footer": "Номер вводится в формате: +38(0ХХ)XXX-XX-XX. Зачисление производится в течении 12 часов",
                  "mask": "(<!^\\d+${3}>)<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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