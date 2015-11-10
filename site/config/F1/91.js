
UIProvider ={"curId":"643","curNom":"RUB",
    "grpId": "100001",
    "id": "91",
    "logo": "91.gif",
    "receiptName": "",
    "sName": "Ростелеком Интернет Урал",
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
                                    "header": "Лицевой счет",
                                    "footer": "Последние десять знаков Вашего телефона, лицевого счета или логина",
                                    "mask": "<!^\\d+${10}>",
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