import java.util.Scanner;

public class WeightConverter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double weight;
        double newWeight;
        int choice;

        System.out.println("Weight conversion program ");
        System.out.println("1: Convert lbs to kgs");
        System.out.println("2: Convert kgs to lbs");

        System.out.println("Choose an option");
        choice = scanner.nextInt();

        if (choice == 1) {
            System.out.println("Enter weight in lbs");
            weight = scanner.nextDouble();
            newWeight = weight * 0.45359237;
            System.out.printf("Weight in kgs is %.2f", newWeight);
        } else if (choice == 2) {
            System.out.println("Enter weight in kgs");
            weight = scanner.nextDouble();
            newWeight = weight * 2.20462;
            System.out.printf("Weight in lbs is %.2f", newWeight);
        } else {
            System.out.println("Invalid choice");
        }
        scanner.close();
    }

}
