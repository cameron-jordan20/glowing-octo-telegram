import requests
from bs4 import BeautifulSoup
#from jinja2 import Template

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'}
url = 'https://finance.yahoo.com/quote/%5EGSPC'
r = requests.get(url)
soup = BeautifulSoup(r.text, 'html.parser')
price = soup.find('span', {'class': 'Trsdu(0.3s) Fw(b) Fz(36px) Mb(-4px) D(ib)'}).text
change = soup.find('span', {'class': 'Trsdu(0.3s) Fw(500) Pstart(10px) Fz(24px) C($positiveColor)'}).text
print(price, change)
#file = open("index.html", "r")
#list_of_lines = file.readlines()
#list_of_lines[12] = "Stock Price" + price + "," + "Percent Change Today" + change
#file = open("index.html", "w")
#file.writelines(list_of_lines)
#file.close()
#with open('index.html') as f:
#    t = Template(f.read())
# Create a dict with template keys and their values
#vals = {'replace_me': 'some new text'}
#with open('index.html') as f:
#    f.write(t.render(vals))
