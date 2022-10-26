import requests

while(True):

    placa = input('Digite a placa do veículo: ')
      
    data = {'placa':placa}
    
    res = requests.post('http://127.0.0.1:3000/veiculos', json=data) 
        
    returned_data = res.json() 

    situacao = returned_data['situacao'] 
    modelo = returned_data['modelo']
    
    print("Informaçoes do veículo : ", modelo, situacao)
