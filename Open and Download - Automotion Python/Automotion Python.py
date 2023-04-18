import pyautogui as py
import time
import pandas
import pyperclip as pc

py.PAUSE = 1.3

py.press("win")
py.write("chrome")
py.press("enter")
py.click(x=1236, y=486)
py.hotkey("ctrl","t")
py.write("https://pages.hashtagtreinamentos.com/aula1-intensivao-sistema")
time.sleep(2)

py.press("enter")
py.click(x=999, y=344)
py.write("meu_login")
py.press("tab")
py.write("minha_senha")
py.click(x=992, y=495)

time.sleep(8)

py.press("x")
py.press("a")
py.click(x=616, y=767)

tabela = pandas.read_csv(r"C:\Users\Kelwin\Downloads\Compras.csv", sep=";")

print(tabela)

total = tabela["ValorFinal"]
quantidade = tabela["Quantidade"]
print(total)

py.hotkey("ctrl","t")
py.write("https://mail.google.com/mail/u/0/#inbox")
py.press("enter")

time.sleep(5)



py.click(x=57, y=206)
py.write("kelwin_esechiel@hotmail.com")
py.press("enter")
py.press("tab")
py.write("Sales report")
py.press("tab")

email = """
dear michael, 

Here's the sales data
Amount: {}

Best regards,
"""

email2 = format(quantidade)
pc.copy(email2)
py.hotkey("ctrl","v")
py.press("tab")
py.press("enter")

