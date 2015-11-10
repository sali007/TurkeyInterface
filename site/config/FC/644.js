UIProvider  ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "644",
  "logo": "644.gif",
  "receiptName": "",
  "sName": "Activ",
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
                  "header": "Введите 9 цифр Вашего номера",
                  "footer": "Номер вводится без первой цифры 7.  Внимание!!! Зачисление платежа проходит в течение 24 часов",
                  "mask": "7<!^\\d+${9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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