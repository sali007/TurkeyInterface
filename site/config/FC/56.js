UIProvider = {
    "curId": "643", "curNom": "RUB",
    "round_math": "~1",
    "grpId": "100001",
    "id": "56",
    "logo": "56.gif",
    "receiptName": "",
    "sName": "Webmoney",
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
                "pageId": "1",
                "title": "",
                "useOnline": "",
                "__objects": [
                  {
                      "__type": "controls",
                      "__objects": [
                        {
                            "header": "¬ведите 12 цифр рублевого кошелька",
                            "footer": "",
                            "mask": "R<!^[0-9]+${4,15}>",
                            "name": "account",
                            "nobr": "false",
                            "regexp": "^[Rr][0-9]{4,15}$",
                            "strip": "False",
                            "type": "text_input"
                        },
                        {
                            "layout": "DG",
                            "type": "keyboard"
                        }
                      ]
                  }
                ]
            },


          ]
      }
    ]
}