import java.util.Scanner;

public class SimulacaoBancaria{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double saldo = 0;
        boolean continuar = true;

        while(continuar){  
            
            int opcao = scanner.nextInt();

            switch(opcao){
                case 1:
                    
                    double valor_deposito = scanner.nextDouble();
                    saldo += valor_deposito;
                    System.out.println("Saldo atual: " + saldo);
                    break;
                
                case 2:
                    
                    double valor_sacado = scanner.nextDouble();
                    if (valor_sacado > saldo) 
                        System.out.println("Saldo insuficiente.");
                    
                    else
                        saldo -= valor_sacado;
                         
                    break;
                
                case 3:
                        System.out.println("Saldo atual: " + saldo);
                        break;
                
                case 0:
                        System.out.println("Programa encerrado.");
                        continuar = false;
                        break;
                        
                
                default:
                    System.out.println("Opção inválida. Tente novamente."); 
            }

            
            
        }
    }
}