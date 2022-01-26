package functionalProgramming;
/*
Functional interfaces
Any interface with single abstract method
Static and default methods allowed
ex:
Scalable
Runnable, Comparable, Comparator, Iterable
*/

public interface Scalable {
    void setScale(double scale);

    double DEFAULT_SCALE = 1.0;

    static boolean isScalable(Object obj) {
        return obj instanceof Scalable;
    }

    default void resetScalable() {
        setScale(DEFAULT_SCALE);
    }
}
