import java.util.Random;

public class RandomNum {

    public static void main(String[] args){
        Random random = new Random();
        int number;

        number = random.nextInt(1,10);
        System.out.println(number);
    }
}
