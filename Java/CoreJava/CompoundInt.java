import java.util.Scanner;

public class CompoundInt {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double principal;
        double rate;
        int time, year;
        double amount;

        System.out.println("Enter the principal amount: ");
        principal = scanner.nextDouble();
        System.out.println("Enter the rate: ");
        rate = scanner.nextDouble() / 100;
        System.out.println("Enter the time period: ");
        time = scanner.nextInt();
        System.out.println("Enter the number of years: ");
        year = scanner.nextInt();

        amount = principal * Math.pow((1 + (rate / time)), (time * year));
        System.out.printf("the amount after %d years is %.2f", year, amount);
        scanner.close();
    }
}