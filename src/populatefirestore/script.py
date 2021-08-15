# Reading an excel file using Python
import xlrd
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
 
# Give the location of the file
loc = ("C:/Users/nomie/Desktop/DataScraping/sp500.xls")
 
wb = xlrd.open_workbook(loc)
sheet = wb.sheet_by_index(0)
 
# For row 0 and column 0
sheet.cell_value(0, 0)
score = 50
img = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'

# firebase setup 
cred = credentials.Certificate('./firebase-sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

for i in range(sheet.nrows):
    doc_ref = db.collection('stocks').document()
    doc_ref.set({
    'symbol': sheet.cell_value(i, 0),
    'title': sheet.cell_value(i, 1),
    'sector': sheet.cell_value(i, 2),
    'score': score,
    'image': img,
}) 