initSidebarItems({"fn":[["dispatch","This should never be directly called from the user."],["serve","This should never be directly called from the user."]],"macro":[["Service!","Create and run the provided function as Windows system service.This takes the service name as a `str` expression and the function which contains the service's main loop as arguments and immediately starts the service. Once this macro returns, the Service Control Manager (SCM) has stopped the service and your program may terminate. The service function gets a `Vec<String>` containing the arguments provided by the SCM (these are **not** the command line arguments of your EXE!) as well as a `Receiver<()>` which, when signalled, indicates that the SCM wants the service to stop. When that happens, the service function should return a `u32` exit code, which will prompt this crate to perform some cleanup and return from `Service!`.To actually run the service, you have to install your binary from an Administrator console window withIt is important that you provide the same service name to the macro (see below).Once everything is set up, you can start and stop your service from the SCM by typing `services.msc` into the Windows prompt; starting the EXE directly will have no effect since the SCM will reject all attempts to register a ServiceMain function which it did not request.ExamplesHow it worksSince The ServiceCtrlDispatcher doesn't allow for a custom pointer to be passed to ServiceMain, we cannot use a closure or any other means to obtain context information about the way we are called. Thus the only option is to have a separate ServiceMain function for each call of `Service!`. But since winservice will already be compiled when you want to create your service, we have to do it here. The macro creates said ServiceMain function as a wrapper which calls directly into the crate with your custom service_main and then feeds this wrapper to the ServiceCtrlDispatcher."]]});