UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7664",
  "logo": "1481.gif",
  "receiptName": "",
  "sName": "Avon",
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
                  "header": "Введите номер представителя",
                  "footer": "",
                  "mask": "<!^[0-9 ]+${1,16}>/<!^[0-9 ]+${1,16}>/<!^[0-9 ]+${1,16}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[0-9 ]{1,16}/[0-9 ]{1,16}/[0-9 ]{1,16}$",
                  "strip": "false",
                  "type": "text_input"
                },
                {
                  "layout": "DGT",
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