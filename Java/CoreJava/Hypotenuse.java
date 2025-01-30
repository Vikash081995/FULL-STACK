import java.util.Scanner;

public class Hypotenuse {

    public static void main(String[] args){
        //Hypotenuse c = Math.square(a*a+b*b)

        Scanner scanner = new Scanner(System.in);
        double a;
        double b;
        double c;
        System.out.println("Enter the length of side A: ");
        a=scanner.nextDouble();
        System.out.println("Enter the length of side B: ");
        b= scanner.nextDouble();
        System.out.println(a);
        System.out.println(b);
        c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
        System.out.println("The hypotenuse of c is "+c);




        scanner.close();

    }
}
