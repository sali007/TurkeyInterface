UIProvider ={"curId":"980","curNom":"UAH",
  "grpId": "100002",
  "id": "7365",
  "logo": "158.gif",
  "receiptName": "",
  "sName": "КИЇВСТАР",
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
                  "footer": "Номер вводится в формате: +38(0ХХ)XXX-XX-XX. Зачисление производится в течении 24 часов",
                  "mask": "(<!^0\\d+${2}>)<!^\\d+${7}>",
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