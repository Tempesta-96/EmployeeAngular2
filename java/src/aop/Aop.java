package aop;

import org.apache.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Pointcut;

public class Aop {
	static Logger log = Logger.getLogger(Aop.class.getName());

//	@Before("execution(* bean.RegisterBean.register(..))")
//	public void beforeAddMethod(final JoinPoint joinPoint) { 
//		System.out.println("Test");
//			log.fatal("Adding Student..." + joinPoint.getTarget().getClass().getSimpleName()
//	                + "'s "
//	                + joinPoint.getSignature().getName()
//	                + " ");
//	    } 
	
	@Around("within(bean.EmpBean)")
    public Object aroundAddr(final ProceedingJoinPoint proceedingJoinPoint) throws Throwable {
        log.fatal("Adding Employee..." + proceedingJoinPoint.getTarget().getClass().getSimpleName()
                + "'s "
                + proceedingJoinPoint.getSignature().getName()
                + " ");
        Object o = proceedingJoinPoint.proceed();
        return o;
    }
}
