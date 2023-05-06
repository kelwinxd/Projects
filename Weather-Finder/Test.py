from tkinter import *
from tkinter import ttk, messagebox
from geopy.geocoders import Nominatim
from timezonefinder import TimezoneFinder
from datetime import datetime
import requests
import pytz

screen = Tk()
#Title
screen.title("Current Conversor")

# Set the screen not resizable
screen.resizable(False, False)
screen.config(background="#3A3967",highlightcolor="black")


#define size of screen

largura = 500
altura = 500

# resulução do sistema
larguta_tela = screen.winfo_screenwidth()
altura_tela =  screen.winfo_screenmmheight()

# posicao da tela
posix = larguta_tela/2 - largura/2
posiy = altura_tela/2 - altura/2 + 300

# definir a geometry
screen.geometry("%dx%d+%d+%d" % (largura,altura,posix,posiy))





#every text begging with label
texting = Label(screen, text="", bg="#3A3967")
# Grid decides where it will place in column ow row
texting.place(x=100,y=200)



def getWeather():
    city = name.get()
    geolocator = Nominatim(user_agent="geoapiExercises")
    location = geolocator.geocode(city)
    obj = TimezoneFinder()
    result = obj.timezone_at(lng=location.longitude, lat=location.latitude)
    
    home = pytz.timezone(result)
    local_time=datetime.now(home)
    current_time= local_time.strftime("%I:%M %p")
   
    #ApiKey
    ApiKey = "7e9475cacf35b9da97d63abdb838ec1a"

    #Api

    Api = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ApiKey

    json_data = requests.get(Api).json()
    condition = json_data['weather'][0]['main']
    temperature = int(json_data['main']['temp']-273.15)
   
   
   
    clock.config(text=current_time)
    temp.config(text=(temperature, "º"))
    cond.config(text=(condition))
    

# its a input


nameImage = PhotoImage(file="Weather-Finder/ret1.png")
Boxsearch = Label(image=nameImage, bg="#3A3967")
Boxsearch.place(x=50, y=50)


name = Entry(screen, bg="#292929", border=0, fg="white", font=("poppins", 15, "bold"))
name.place(x=85, y=58)
name.focus()


#importing image

imgsearch = PhotoImage(file="Weather-Finder/search.png")
SearchButton = Button(screen, image=imgsearch, bg="#292929", border=0, cursor="hand2", command=getWeather)
SearchButton.place(x=310, y=58)


ImgTemp = PhotoImage(file="Weather-Finder/temp.png")
tempWall = Label(screen, image=ImgTemp, bg="#3A3967")
tempWall.place(x=48, y=115)
temp = Label(screen, bg="#1E1D1D", font=("poppins", 40, "bold"), fg="white")
temp.place(x=135, y=160)



ImgClock = PhotoImage(file="Weather-Finder/ret22.png")
time = Label(screen,bg="#3A3967", image=ImgClock )
time.place(x=280, y=150)
clock = Label(screen, bg="#292929", font=("poppins", 16, "bold"), fg="white")
clock.place(x=333, y=192)

cond = Label(screen, font=("poppins", 15, "bold"), bg="#1E1D1D", fg="white")
cond.place(x=130, y=250)


screen.mainloop()