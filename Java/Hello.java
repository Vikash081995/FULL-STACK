import CoreJava.Calc;
import CoreJava.AdvancedCal;

public class Hello {
    public static void main(String[] args) {
        Calc cal = new Calc();
        System.out.println(cal.add(2, 3));
        System.out.println(cal.sub(2, 3));

        AdvancedCal adv = new AdvancedCal();
        System.out.println(adv.mul(2, 3));
        System.out.println(adv.div(2, 3));
        System.out.println(adv.add(2, 3));
    }
}