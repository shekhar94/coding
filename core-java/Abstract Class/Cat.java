package abstractclassdemo;

public class Cat extends Animal {
    public Cat() {
        this.name = "Micky";
    }
    public String sound() {
        return "Meow";
    }
    public static void main(String[] args) {
        System.out.println(this.sound());
    }
}

