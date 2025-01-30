import java.util.Scanner;

public class TempratureConv {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double temp;
        double newTemp;
        String unit;

        System.out.println("Enter the temperature: ");
        temp = sc.nextDouble();
        System.out.println("Enter the unit (C or F): ");
        unit = sc.next().toUpperCase();

        // (condition)?true:false;
        newTemp = (unit.equals("C")) ? (temp - 32) * 5 / 9 : (temp * 5 / 9) + 32;

        System.out.println(temp);
        System.out.println(unit);
        System.out.println("Converted temperature: " + newTemp);
        sc.close();
    }

}
