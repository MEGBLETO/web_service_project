package restfulMathCalculatoro;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/calculator")
public class restcalc {
	
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String sayHello() {
		return "Hello, world";
	}
	

	
	@GET
	@Path("/add/{a}/{b}")
	@Produces(MediaType.TEXT_PLAIN)
	public String addPlainText(@PathParam("a") double a, @PathParam("b") double b) {
		return (a + b) + "";
	}
	

	@GET
	@Path("/sub/{a}/{b}")
	@Produces(MediaType.TEXT_PLAIN)
	public String subPlainText(@PathParam("a") double a, @PathParam("b") double b) {
		return (a-b) + "";
	}
	

	@GET
	@Path("/mul/{a}/{b}")
	@Produces(MediaType.TEXT_PLAIN)
	public String mulPlainText(@PathParam("a") double a, @PathParam("b") double b) {
		return (a * b) + "";
	}
	
	/********************************************************************************/
	@GET
	@Path("/add/{a}/{b}")
	@Produces (MediaType.TEXT_XML)
	public String add(@PathParam("a") double a , @PathParam("b") double b){
	    return "<?xml version=\"1.0\"?>" + "<result>" + (a+b) + "</result>";
   }

	
	@GET
	@Path("/sub/{a}/{b}")
	@Produces (MediaType.TEXT_XML)
	public String sub(@PathParam("a") double a , @PathParam("b") double b){
	    return "<?xml version=\"1.0\"?>" + "<result>" + (a-b) + "</result>";
   }
	
	@GET
	@Path("/mul/{a}*{b}")
	@Produces (MediaType.TEXT_XML)
	public String mul(@PathParam("a") double a , @PathParam("b") double b){
	    return "<?xml version=\"1.0\"?>" + "<result>" + (a*b) + "</result>";
   }
	
	
}
