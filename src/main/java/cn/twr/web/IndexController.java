package cn.twr.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;


/**
 * 定义一个WebController
 */
@Controller
public class IndexController {

    /**
     * 第一个由Java书写的网页
     */
    @RequestMapping("/index")
    public String index(){
        return "index";
    }

    @GetMapping("/login")
    public String login(){
        //加载View视图
        return "login";
    }
    @PostMapping("/login")
    public String loginPost(String username, String userpwd, HttpSession session, Model model){

        //验证是否有权力使用系统
        if("admin".equals(username) && "admin".equals(userpwd)){
            session.setAttribute("username", username);

            //页面跳转
            return "redirect:index";
        }

        //用户名、密码错误
        String info = "管理员帐号、密码错误，请重新输入...";
        model.addAttribute("info", info);
        return "login";
    }

    @RequestMapping("/logout")
    public String logout(HttpSession session){

        //清理会话数据
        session.invalidate();

        //页面跳转
        return "redirect:login";

    }
}